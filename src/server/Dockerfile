# syntax=docker/dockerfile:1

FROM python:3.9-alpine
WORKDIR /server

# uncomment the line below to use Chinese mirror
RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories
RUN apk add --no-cache gcc g++ musl-dev linux-headers

COPY requirements.txt requirements.txt
# uncomment the line below to use Chinese mirror
RUN pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
RUN pip install -r requirements.txt

ENV FLASK_APP=__init__.py
ENV FLASK_ENV=development
ENV FLASK_RUN_HOST=0.0.0.0
ENV PYTHONUNBUFFERED=1

EXPOSE 5000
COPY . .
RUN flask db upgrade
CMD ["python", "-u", "-m", "flask", "run"]
