export type JSONDisplayProps = {
  data: any;
  className?: string;
};

export function JSONDisplay(props: JSONDisplayProps) {
  return (
    <div>
      <pre>{JSON.stringify(props.data, null, 2)}</pre>
    </div>
  );
}
