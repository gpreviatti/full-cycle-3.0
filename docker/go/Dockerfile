FROM golang as build

WORKDIR /usr/src/app

COPY ./main.go .

RUN go build main.go

RUN rm main.go

FROM scratch as run

WORKDIR /usr/src/app

COPY --from=build /usr/src/app .

CMD ["./main"]
