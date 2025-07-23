from flask import Flask
import psycopg2

db_connection = psycopg.connect("dbname=test user=ericm password=PLAyer64002!!")

def create_app(config_class=Config):
 