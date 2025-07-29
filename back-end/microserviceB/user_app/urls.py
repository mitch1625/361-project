from django.urls import path

from .views import SignUpView, Log_in

urlpatterns = [
    path("signup/", SignUpView.as_view()),
    path("login/", Log_in.as_view())
]
