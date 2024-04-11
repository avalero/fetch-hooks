# preact-hooks


### Examples (tested on Deno Fresh 1.6.8)

#### useFetch

###### refetch with url

```typescript
import { useFetch } from "@avalero/preact-hooks/Fetch";
import { FunctionComponent } from "preact";

// Character Preact FunctionalComponent
const Character:FunctionComponen = () => {
  const { data, loading, error, refetch } = useFetch<{ name: string }>(
    "https://swapi.dev/api/people/1",
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {(error as any).message}</p>;
  return (
    <>
      <div>{data?.name}</div>;
      <button onClick={() => refetch("https://swapi.dev/api/people/2")}>
        Refetch
      </button>
    </>
  );
};
```

###### refetch without url

```typescript
import { useFetch } from "@avalero/preact-hooks/Fetch";
import { FunctionComponent } from "preact";

// Character Preact FunctionalComponent
const Character:FunctionComponent = () => {
  const { data, loading, error, refetch } = useFetch<{ name: string }>(
    "https://swapi.dev/api/people/1",
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {(error as any).message}</p>;
  return (
    <>
      <div>{data?.name}</div>;
      <button onClick={() => refetch()}>
        Refetch
      </button>
    </>
  );
};
```

###### lazy fetch
```typescript

import { useLazyFetch } from "@avalero/preact-hooks/Fetch";
import { FunctionComponent } from "preact";

// Character Preact FunctionalComponent
const Character:FunctionComponent = () => {
  const { data, loading, error, lazyFetch } = useLazyFetch<{ name: string }>();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {(error as any).message}</p>;
  return (
    <>
      <button onClick={() => lazyFetch("https://swapi.dev/api/people/1")}>
        Fetch
      </button>
      <div>{data?.name}</div>;
    </>
  );
};
```

###### lazy fetch with default url
```typescript

import { useLazyFetch } from "@avalero/preact-hooks/Fetch";
import { FunctionComponent } from "preact";

// Character Preact FunctionalComponent
const Character:FunctionComponent = () => {
  const { data, loading, error, lazyFetch } = useLazyFetch<{ name: string }>("https://swapi.dev/api/people/1");
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {(error as any).message}</p>;
  return (
    <>
      <button onClick={() => lazyFetch()}>
        Fetch
      </button>
      <div>{data?.name}</div>;
    </>
  );
};
```
