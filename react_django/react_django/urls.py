
from django.contrib import admin
from django.urls import path,include
from rest_framework import routers
from home.Viewset import StudentViewSet

# Serializers define the API representation.
router = routers.DefaultRouter()
router.register(r'studentdata', StudentViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('studentdata',include(router.urls)),


]
