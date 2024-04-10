# preact-hooks


### Examples (tested on Deno Fresh 1.6.8)

#### useFetch

```typescript
import { useFetch } from "@avalero/preact-hooks/Fetch";
import { FunctionComponent } from "preact";

// Character Preact FunctionalComponent
const Character: FunctionComponent = () => {
  const { data, loading, error } = useFetch<{ name: string }>(
    "https://swapi.dev/api/people/1",
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return <div>{data.name}</div>;
};
```
