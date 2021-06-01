FROM alpine:3.12
RUN apk update && apk add \
  git \
  curl \
  wget \
  unzip \
  vim \
  mlocate \
  iproute2 \
  inotify-tools \ 
  which \ 
  openssh-server \
  openssh-client \
  mysql \
  perl-test-simple 
# Redis setup
RUN apk update && apk add redis
# Redis config
RUN sed -ri 's/bind/ 127.0.0.1/#bind 127.0.0.1/g' /etc/redis.conf
RUN sed -ri 's/protected-mode yes/protected-mode no/g' /etc/redis.conf
# nginx 
RUN apk add nginx
# Install perl modules
RUN apk update && apk add perl-dbi \
    perl-json \
    perl-cgi  \
    perl-posix-strftime-compiler \
    perl-uri \
    perl-sys-syslog \
    perl-digest-md5 \
    perl-libwww \
    perl-template-toolkit \
    perl-dbd-mysql \
    perl-clone \
    perl-data-dumper \
    perl-encode \
    perl-html-parser \
    perl-http-message \
    perl-io \
    perl-socket \
    perl-lwp-useragent-determined \
    perl-mime-base32 \
    perl-mime-base64 \
    perl-switch \
    perl-text-template \
    perl-html-template \
    perl-time-hires \
    perl-uri-doc \
    perl-data-uuid \
    perl-authen-ntlm
