# -*- coding: utf-8 -*-
'''
**************************
sonic.server.resource.game
**************************
Modulo que contiene las busquedas de la api.
'''
from flask_restful import Resource, fields, marshal_with
from sonic.server.resource import SonicApiResource

BOARD = {
    'board': fields.Boolean
}

class Board(SonicApiResource):
    """Servicio que permite obtener el tablerod e un nuevo juego."""

    @staticmethod
    def get_path():
        return '/board'

    @marshal_with(BOARD)
    def get(self):
        return {'board': True}
