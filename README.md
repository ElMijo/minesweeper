# minesweeper
El conocido juego del buscaminas. Esta desarrollado con Python 3 y React. 

## Instalación

```bash
git clone https://github.com/ElMijo/minesweeper
cd minesweeper/sonic
virtualenv -p python3 venv
source venv/bin/activate
pip3 install -r requirements.txt
deactivate
cd ../bomber
yarn install
```

## Sonic

Es la api con la que se comunicara la aplicación cliente del juego.

### Configuración

Para agregar las configuraciones de la API solo debemos crear un archivo
**config.cfg**.

> El: **DEBUG=True**

### Iniciando la api

```bash
cd <project-dir>/sonic
source venv/bin/activate
python manage.py  runserver -h localhost -p 5005
```

## Bomber

Es la aplicación cliente del juego

### Configuración

es necesario indicarle a **Bomber** donde esta la api, por lo que debemos crear un
archivo **.env** con la siguiente variable ***REACT_APP_API_BASE_URL***.

> El: **REACT_APP_API_BASE_URL='http://localhost:5005'**

### Iniciando Al cliente

```bash
cd <project-dir>/bomber
yarn start
```
