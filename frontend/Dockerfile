FROM node:20-alpine AS builder

WORKDIR /app

# 复制package.json和package-lock.json（如果存在）
COPY package*.json ./

# 安装依赖
RUN yarn config set registry http://registry.npmmirror.com && yarn install

# 复制源代码
COPY . .

# 构建静态文件
RUN yarn build

# 生产阶段
#FROM nginx:alpine
FROM harbor.luhome.com:80/library/nginx:alpine

# 复制构建产物到 nginx 目录
COPY --from=builder /app/out /usr/share/nginx/html

# 复制nginx配置文件（可选）
# COPY nginx.conf /etc/nginx/nginx.conf

# 暴露端口
EXPOSE 80

# 启动nginx
CMD ["nginx", "-g", "daemon off;"]
