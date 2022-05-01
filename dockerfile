# prepare the files
FROM registry.access.redhat.com/ubi8/nodejs-16-minimal:1-39 as builder
COPY --chown=1001:1001 ./ /source
WORKDIR /source
RUN npm i \
    && npm run build

FROM docker.io/caddy:2.5.0 as caddy

# build the actual container
FROM registry.access.redhat.com/ubi8/ubi-micro:8.5-836
COPY --chown=1001:1001 --from=builder /source/public /srv/
# We'll steal the binary from the official docker container
COPY --chown=1001:1001 --from=caddy /usr/bin/caddy /usr/bin/caddy
USER 1001
WORKDIR /srv
ENTRYPOINT [ "/usr/bin/caddy", "file-server" ]
