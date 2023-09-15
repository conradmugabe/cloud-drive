type Props = {
  params: { id: string };
};

export default function Page({ params: { id } }: Props) {
  return <section>Currently viewing folder with id {id}</section>;
}
