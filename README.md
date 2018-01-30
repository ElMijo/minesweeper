# minesweeper
El conocido juego del buscaminas.

## Sonic

Es la api con la que se comunicara la aplicación cliente del juego.

### Configuración

Para agregar las configuraciones de la API solo debemos crear un archivo
**config.cfg**.

> El: **DEBUG=True**

## Bomber

Es la aplicación cliente del juego

### Configuración

es necesario indicarle a **Bomber** donde esta la api, por lo que debemos crear un
archivo **.env** con la siguiente variable ***REACT_APP_API_BASE_URL***.

> El: **REACT_APP_API_BASE_URL='http://localhost:5005'**
