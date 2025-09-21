---
slug: MediatR
title: MediatR
---

**MediatR** は .NET のための **CQRS（Command Query Responsibility Segregation）** パターンや **Mediatorパターン** を実装するライブラリです。主に以下のような用途で使われます：

- コントローラーやサービス層から直接依存関係を持たずに、処理をハンドラーに委譲
- Command / Query を明確に分離
- DI（依存性注入）と組み合わせて、保守性の高い設計が可能

---

## ✅ MediatRの基本構成サンプル（ASP.NET Core）

### 1. NuGetでライブラリを追加

```bash
dotnet add package MediatR.Extensions.Microsoft.DependencyInjection
```

---

### 2. DI登録（`Program.cs`）

```csharp
builder.Services.AddMediatR(cfg => cfg.RegisterServicesFromAssembly(typeof(Program).Assembly));
```

---

### 3. クエリ定義（`GetUserByIdQuery.cs`）

```csharp
using MediatR;

public class GetUserByIdQuery : IRequest<UserDto>
{
    public int Id { get; set; }
}
```

---

### 4. ハンドラー定義（`GetUserByIdHandler.cs`）

```csharp
using MediatR;

public class GetUserByIdHandler : IRequestHandler<GetUserByIdQuery, UserDto>
{
    private readonly IUserRepository _repository;

    public GetUserByIdHandler(IUserRepository repository)
    {
        _repository = repository;
    }

    public async Task<UserDto> Handle(GetUserByIdQuery request, CancellationToken cancellationToken)
    {
        var user = await _repository.FindByIdAsync(request.Id);
        return new UserDto(user.Id, user.Name);
    }
}
```

---

### 5. コントローラーでの使用（`UserController.cs`）

```csharp
using MediatR;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class UserController : ControllerBase
{
    private readonly IMediator _mediator;

    public UserController(IMediator mediator)
    {
        _mediator = mediator;
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> Get(int id)
    {
        var result = await _mediator.Send(new GetUserByIdQuery { Id = id });
        return Ok(result);
    }
}
```

---

## 🧩 ポイント整理

- `IMediator` は **DIコンテナから注入**される
- `Send()` メソッドでクエリやコマンドを送信
- ハンドラーは **責任の所在を明確に分離**できる設計単位
