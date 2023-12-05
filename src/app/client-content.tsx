"use client";

import {
  StatsigProvider,
  StatsigSynchronousProvider,
  useGate,
  StatsigUser,
} from "statsig-react";

const DEMO_CLIENT_KEY = "client-rfLvYGag3eyU0jYW5zcIJTQip7GXxSrhOFN69IGMjvq";

function Content() {
  const { value } = useGate("a_gate");
  return <>a_gate: {value ? "Passing" : "Failing"}</>;
}

export default function ClientContent({
  user,
  values,
}: {
  user: StatsigUser;
  values: Record<string, unknown> | null;
}): JSX.Element {
  if (values == null) {
    return (
      <StatsigProvider sdkKey={DEMO_CLIENT_KEY} user={user}>
        <Content />
      </StatsigProvider>
    );
  }

  return (
    <StatsigSynchronousProvider
      initializeValues={values}
      user={user}
      sdkKey={DEMO_CLIENT_KEY}
    >
      <Content />
    </StatsigSynchronousProvider>
  );
}
