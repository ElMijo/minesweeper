# -*- coding: utf-8 -*-
'''
*****
sonic
*****
Modulo principal del servidor del juego.
'''

import os, logging

__path_package = os.path.abspath(os.path.join(os.path.dirname(__file__), ''))
__path_proyect = os.path.abspath(os.path.join(__path_package, '../'))
__config_file = os.path.abspath(os.path.join(__path_proyect, 'config.cfg'))
__logger_folder = os.path.abspath(os.path.join(__path_proyect, 'var/logs'))
__logger_format = logging.Formatter("[%(asctime)s] %(levelname)s - {%(pathname)s:%(lineno)d} %(message)s")

def create_app(logname='api'):
    '''Esta función permite crear la aplicación Flask desde cualquier lugar del proyecto

    :param logname:  *string* Nombre del log que se desea utilizar (Default value = api)
    :return: Flask instance object.
    '''
    from flask import Flask
    from sonic.server import apiv1, v1_blueprint

    app = Flask(__name__+'.'+logname)
    if os.path.exists(__config_file):
        app.config.from_pyfile(__config_file)

    app.logger.addHandler(create_handler_logger(logname))

    apiv1.init_app(app)
    app.register_blueprint(v1_blueprint, url_prefix='/api/v1')

    @app.after_request
    def after_request(response):
        response.headers.add('Access-Control-Allow-Origin', '*')
        response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
        response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
        response.headers.add('Access-Control-Allow-Credentials', True)
        return response

    return app

def create_handler_logger(name, level=logging.INFO, maxBytes=10000000, backupCount=1):
    from logging.handlers import RotatingFileHandler
    filename = "{0}/{1}.log".format(__logger_folder, name)
    handler = RotatingFileHandler(filename, maxBytes=maxBytes, backupCount=backupCount)
    handler.setLevel(level)
    handler.setFormatter(__logger_format)
    return handler
