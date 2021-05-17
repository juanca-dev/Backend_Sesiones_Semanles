from flask import Flask
#la variable a sera la instancia de la  clase Flask
#el primer parametro del constructor de la clase
#tiene que ser el hilo en el cuál se ejecutado(())
#__name__
app = Flask(__name__)

@app.route('/')
def ruta_inicial():
    return {
      "message":"El servidor se levantado exitosamente."
      }




#antes de hacer algo es del app.run(debug=True)
app.run(debug=True)