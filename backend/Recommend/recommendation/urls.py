from django.urls import re_path as url
from . import views


# pocketfolio url config
urlpatterns = [
    # 포트폴리오 테스트
    url(r"^api/v2/test", views.release_test),
]
