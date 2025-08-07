# Python Docker Compose 演示项目

这是一个使用 Docker Compose 构建的全栈 Web 应用程序演示项目，包含 Python FastAPI 后端和 Next.js 前端。

## 🚀 技术栈

### 后端
- **Python** - 主要编程语言
- **FastAPI** - 现代、快速的 Web 框架
- **Docker** - 容器化部署

### 前端
- **Next.js 15** - React 全栈框架
- **TypeScript** - 类型安全的 JavaScript
- **React 19** - 用户界面库
- **Docker** - 容器化部署

### 基础设施
- **Docker Compose** - 多容器应用程序编排

## 📋 项目结构

```
python-docker-compose-demo/
├── backend/                 # Python FastAPI 后端
│   ├── Dockerfile          # 后端容器配置
│   └── main.py             # FastAPI 应用入口
├── frontend/               # Next.js 前端
│   ├── Dockerfile          # 前端容器配置
│   ├── package.json        # 前端依赖配置
│   └── src/                # 前端源代码
├── docker-compose.yml      # Docker Compose 配置
└── README.md              # 项目说明文档
```

## 🛠️ 安装和运行

### 前置要求

确保您的系统已安装以下软件：
- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

### 快速开始

1. **克隆项目**
   ```bash
   git clone <repository-url>
   cd python-docker-compose-demo
   ```

2. **启动应用程序**
   ```bash
   docker-compose up --build
   ```

3. **访问应用程序**
   - 前端: http://localhost:3000
   - 后端 API: http://localhost:8000
   - API 文档: http://localhost:8000/docs

### 开发模式

如果您想在开发模式下运行项目：

```bash
# 启动开发环境
docker-compose up --build

# 在后台运行
docker-compose up -d --build

# 查看日志
docker-compose logs -f

# 停止服务
docker-compose down
```

## 🔧 API 端点

### 后端 API

- `GET /api/hello` - 返回问候消息
- `GET /docs` - FastAPI 自动生成的 API 文档

## 🐳 Docker 命令参考

```bash
# 构建镜像
docker-compose build

# 启动服务
docker-compose up

# 后台运行
docker-compose up -d

# 停止服务
docker-compose down

# 查看运行状态
docker-compose ps

# 查看日志
docker-compose logs

# 重新构建并启动
docker-compose up --build
```

## 🔍 故障排除

### 常见问题

1. **端口冲突**
   - 如果 3000 或 8000 端口被占用，请修改 `docker-compose.yml` 中的端口映射

2. **构建失败**
   - 确保 Docker 正在运行
   - 清理 Docker 缓存: `docker system prune -a`

3. **前端无法连接后端**
   - 检查 `NEXT_PUBLIC_API_URL` 环境变量设置
   - 确保后端服务正在运行

## 📝 开发指南

### 添加新的 API 端点

在 `backend/main.py` 中添加新的路由：

```python
@app.get("/api/new-endpoint")
def new_endpoint():
    return {"message": "New endpoint"}
```

### 修改前端

前端代码位于 `frontend/src/` 目录中，修改后会自动重新加载。

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 👨‍💻 作者
姓名: 青萍叙事  
邮箱: lusyoe@163.com  
博客: https://blog.lusyoe.com  
GitHub: https://github.com/lusyoe

---

**注意**: 这是一个演示项目，用于学习和开发目的。在生产环境中使用前，请确保进行适当的安全配置和优化。
