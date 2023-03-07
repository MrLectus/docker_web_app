FROM static-web_node:latest
RUN useradd -m brown
RUN usermod -aG nginx brown
WORKDIR /home/brown
USER brown:brown
