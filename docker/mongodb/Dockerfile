FROM mongo:5

RUN mkdir -m 755 /var/lib/mongodb \
    && chown -R mongodb:mongodb /var/lib/mongodb
RUN mkdir -m 755 /opt/backups \
    && chown -R mongodb:mongodb /opt/backups

COPY ./mongod.conf /etc/
COPY ./data/init.csv /opt/backups/

CMD ["mongod", "-f", "/etc/mongod.conf"]