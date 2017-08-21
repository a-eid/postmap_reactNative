from django.http import HttpResponse
from channels.handler import AsgiHandler
from postmap.models import Post 
import json


def http_consumer(message):
    # Make standard HTTP response - access ASGI path attribute directly
    # response = HttpResponse("Hello world! You asked for %s" %
    #                         message.content['path'])
    # Encode that response into message format (ASGI)
    res = ""
    for chunk in AsgiHandler.encode_response(response):
        # message.reply_channel.send(chunk)
        res += chunk
    message.reply_channel.send(res)
    # print("ok")
    # return 
    # j = json.load(res)
    # (Post(content=j["content"] , title=j["title"] , author=j["author"] , 
    #     latitude=j["position"]["latitude"] , longtiude=j["position"]["longtiude"] , 
    #     pub_date=j["position"]["timestamp"])
    # ).save()


    # send({
    #   content: this.state.content,
    #   title: this.state.title,
    #   author: this.state.author,
    #   position: this.state.position
    # });

    # content = models.CharField(max_length=200)
    # title = models.CharField(max_length=200)
    # author = models.CharField(max_length=200)
    # latitude = models.CharField(max_length=200)
    # longitude = models.CharField(max_length=200)
    # pub_date = models.DateTimeField('date published')

# messagePayload = {
#     "type": "add_marker",
#     "payload": {
#         "author": "test author",
#         "title": "test title",
#         "lat": "test lat",
#         "lng": "test lng",
#         "pub_date": "test pub date",
#     }
# }

# In consumers.py


def ws_message(message):
    # ASGI WebSocket packet-received and send-packet message types
    # both have a "text" key for their textual data.
    # message.reply_channel.send({"text": json.dumps(messagePayload)})
    message.reply_channel.send({"text": message.content['text']})


"""
class Post(models.Model):
    content = models.CharField(max_length=200)
    title = models.CharField(max_length=200)
    author = models.CharField(max_length=200)
    latitude = models.CharField(max_length=200)
    longitude = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')


19:01:55: {
  "mocked": false,
  "timestamp": 1503331313331,
  "coords": {
    "speed": 0,
    "heading": 0,
    "accuracy": 1956,
    "longitude": 41.4156653,
    "altitude": 0,
    "latitude": 52.7453878
  }
}
"""