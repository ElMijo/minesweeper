# -*- coding: utf-8 -*-
# manage.py

from flask_script import Manager
from sonic import create_app
from sonic.server.command import RunServerCommand

manager = Manager(create_app)

manager.add_command('runserver', RunServerCommand)

if __name__ == '__main__':
    try:
        manager.run()
    except KeyboardInterrupt:
        print("\n\nInterrucción inesperada del proceso\n")
    except Exception:
        raise
