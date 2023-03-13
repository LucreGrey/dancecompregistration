FROM golang:alpine as builder 
WORKDIR /go/src/github.com/lucregrey/dancecompregistration

RUN mkdir /go/src/github.com/lucregrey/dancecompregistration/loginpage
RUN mkdir /go/src/github.com/lucregrey/dancecompregistration/motownshowdown

COPY *.go /go/src/github.com/lucregrey/dancecompregistration/
COPY *.mod /go/src/github.com/lucregrey/dancecompregistration/
#COPY *.sum /go/src/github.com/lucregrey/dancecompregistration/

COPY loginpage /go/src/github.com/lucregrey/dancecompregistration/loginpage
COPY motownshowdown /go/src/github.com/lucregrey/dancecompregistration/motownshowdown

RUN apk update && apk add git gcc alpine-sdk
RUN GOOS=linux GOARCH=amd64 go build -a -o dancecompregistration .; go version

FROM alpine:latest

RUN mkdir -p /opt/dancecompregistration/config && apk update && apk add ca-certificates
WORKDIR /opt/dancecompregistration/
COPY . /opt/dancecompregistration/
COPY --from=builder /go/src/github.com/lucregrey/dancecompregistration /opt/dancecompregistration/
EXPOSE 8080
ENTRYPOINT ["/opt/dancecompregistration/dancecompregistration"]