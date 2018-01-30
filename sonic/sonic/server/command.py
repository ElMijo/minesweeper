# -*- coding: utf-8 -*-
'''
********************
sonic.server.command
********************
Modulo que contiene los comandos de las aplicaciones servidor del juego.
'''
from flask import current_app
from flask_script import Command, Option, prompt, prompt_bool

class RunServerCommand(Command):
    '''Runs the Flask development server'''
    option_list = (
        Option('-h', '--host', help='The host server'),
        Option('-p', '--port', help='The port server', type=int),
    )
    def run(self, host, port):

        current_app.run(threaded=False, host=host, port=port)
