FROM olliecaine/base:master

WORKDIR /project

# Install Chrome
RUN apk update && apk upgrade \
    && echo @edge http://nl.alpinelinux.org/alpine/v3.8/community >> /etc/apk/repositories \
    && echo @edge http://nl.alpinelinux.org/alpine/v3.8/main >> /etc/apk/repositories \
    && apk add --no-cache \
      chromium \
      nss \
      make@edge \
      python@edge \      
      freetype@edge \
      harfbuzz@edge \
      ttf-freefont@edge \
      freetype-dev@edge
ENV CHROME_BIN=/usr/bin/chromium-browser \
    CHROME_PATH=/usr/lib/chromium/    
