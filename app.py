from flask import Flask,render_template,request
import plotly
import plotly.graph_objs as go
import pandas as pd
import numpy as np
import json
app=Flask(__name__)
def createplot(graph):
    if graph=='Bar':
        N=40
        x=np.linspace(0,1,N)
        y=np.random.rand(N)
        df=pd.DataFrame({'x':x,'y':y})
        data=[go.Bar(x=df['x'],y=df['y'])]
    elif graph=='Scatter':
        N=1000
        random_x=np.random.rand(N)
        random_y=np.random.rand(N)
        data=[go.Scatter(x=random_x,y=random_y)]

    graphJson=json.dumps(data,cls=plotly.utils.PlotlyJSONEncoder)
    return graphJson
@app.route('/')
def index():
  return render_template('index.html')
@app.route('/graph',methods=['GET','POST'])
def change_graph():
    graph=request.args['selected']
    graphJson=createplot(graph)
    return graphJson
if __name__ == '__main__':
    app.run()
