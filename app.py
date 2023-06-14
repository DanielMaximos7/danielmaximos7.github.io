import dash
import dash_core_components as dcc
import dash_html_components as html

app = dash.Dash(__name__)

app.layout = html.Div(
    children=[
        html.H1("Hello, Dash!"),
        dcc.Graph(
            id="example-graph",
            figure={
                "data": [{"x": [1, 2, 3], "y": [4, 1, 2], "type": "bar", "name": "Example"}],
                "layout": {"title": "Dash Bar Chart"},
            },
        ),
    ]
)

# Generate the static HTML file
app.css.config.serve_locally = True
app.scripts.config.serve_locally = True

if __name__ == "__main__":
    app.run_server(debug=True)
    # Export the app to a static HTML file
    app.export("index.html", validate=False)
