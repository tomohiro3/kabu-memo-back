FROM mongo:5

RUN mkdir -m 755 /var/lib/mongodb \
    && chown -R mongodb:mongodb /var/lib/mongodb

COPY ./mongod.conf /etc/

CMD ["mongod", "-f", "/etc/mongod.conf"]