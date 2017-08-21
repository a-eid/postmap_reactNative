# In routing.py
from channels.routing import route
from channels.routing import route
from postmap.consumers import ws_message


# channel_routing = [
#     route("http.request", "postmap.consumers.http_consumer"),
# ]

channel_routing = [
    route("websocket.receive", ws_message),
]