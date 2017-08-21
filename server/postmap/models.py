from django.db import models

class Post(models.Model):
    content = models.CharField(max_length=200)
    title = models.CharField(max_length=200)
    author = models.CharField(max_length=200)
    latitude = models.CharField(max_length=200)
    longitude = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')


"""
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