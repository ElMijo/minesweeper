# -*- coding: utf-8 -*-
'''
**************************
sonic.server.resource.game
**************************
Modulo que contiene las busquedas de la api.
'''
from flask_restful import Resource, fields, marshal_with
from sonic.server.resource import SonicApiResource
from sonic.server.helpers import Board as BoardGenerator

BOARD_FIELDS = {
    'board': fields.List(fields.List(fields.Raw))
}

class Board(SonicApiResource):
    """Servicio que permite obtener el tablerod e un nuevo juego."""

    @staticmethod
    def get_path():
        return '/board/<int:rows>/<int:cols>/<int:mines>'

    @marshal_with(BOARD_FIELDS)
    def get(self, rows, cols, mines):
        board = BoardGenerator(rows, cols, mines)
        return {'board': board.generate()}
