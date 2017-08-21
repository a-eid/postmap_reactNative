from django.conf.urls import url, include
from django.contrib import admin

urlpatterns = [
    url(r'^postmap/', include('postmap.urls')),
    url(r'^admin/', admin.site.urls),
]
