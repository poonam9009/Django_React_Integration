from rest_framework import routers
from .api import LeadsViewset

router = routers.DefaultRouter()
router.register('api/tryapp',LeadsViewset,'tryapp')

urlpatterns = router.urls