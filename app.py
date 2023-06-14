import dash
import dash_html_components as html

app = dash.Dash(__name__)

app.layout = html.Div(
    children=[
        html.H1("Hello, World!"),
        html.P("Welcome to my Dash website."),
    ]
)

if __name__ == "__main__":
    app.run_server(debug=True)
