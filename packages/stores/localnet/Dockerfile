FROM ubuntu as config

RUN apt-get update && apt-get install -y git
RUN git clone https://github.com/merlins-labs/LocalMerlins.git
RUN mkdir -p /merlins/.merlinsd/config && \
  mv ./LocalMerlins/config /merlins/.merlinsd/ && \
  mkdir -p /merlins/.merlinsd/data && \
  mv ./LocalMerlins/data /merlins/.merlinsd/ && \
  mv ./LocalMerlins/priv_validator_state.json /merlins/.merlinsd/data

#enable swagger
RUN sed -i 's/swagger = false/swagger = true/g' /merlins/.merlinsd/config/app.toml

# use debug version for utils, like sh
#FROM furylabs/merlins-dev:v9.0.0-debug
FROM furylabs/merlins:9.0.0

COPY --from=config /merlins/.merlinsd/config /merlins/.merlinsd/config
COPY --from=config /merlins/.merlinsd/data /merlins/.merlinsd/data
