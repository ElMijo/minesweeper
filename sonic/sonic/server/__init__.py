# -*- coding: utf-8 -*-
'''
************
sonic.server
************
Modulo principal del servidor de la api.
'''
from flask_restful import Api, output_json
from flask import Blueprint

from sonic.server.resource import game

class SonicApi(Api):
    def __init__(self, *args, **kwargs):
        Api.__init__(self,*args, **kwargs)
        self.representations = {
            # 'application/xml': output_xml,
            # 'text/html': output_html,
            # 'text/csv': output_csv,
            'application/json': output_json,
        }

    def register_resource(self, resource):
        return self.add_resource(resource, resource.get_path())

v1_blueprint = Blueprint('v1', __name__,)

apiv1 = SonicApi(v1_blueprint, catch_all_404s=True)
apiv1.register_resource(game.Board)
