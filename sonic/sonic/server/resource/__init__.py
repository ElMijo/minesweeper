# -*- coding: utf-8 -*-
'''
*********************
sonic.server.resource
*********************
Modulo principal de los recursos de la aplicación servidor del juego.
'''
from flask_restful import Resource, fields, marshal

class SonicApiResource(Resource):
    @staticmethod
    def get_path():
        raise NotImplementedError

    def __repr__(self):
        return "<{0} /api/v1{1}>".format(self.__class__.__name__, self.get_path())
