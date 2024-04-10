# preact-hooks
Preact Hooks for JSR.io

### Examples

#### useFetch

```typescript

import { useFetch } from "@avalero/preact-hooks/Fetch";
import { FunctionComponent } from "preact";

// Character Preact FunctionalComponent
const Character:FunctionComponent = () => {
  const { data, loading, error } = useFetch<{ name: string }>(
    "https://swapi.dev/api/people/1"
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