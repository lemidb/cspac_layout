import MyCard from "@/app/components/cards/card";
import * as Dialog from "@radix-ui/react-dialog";

export default function Page() {
  return (
    <>
      <Dialog.Root>
        <Dialog.Portal>
            <Dialog.DialogTrigger>
                <button className="rounded-lg px-4 py-2 bg-blue-500">Login</button>
            </Dialog.DialogTrigger>
          <Dialog.Overlay />
          <Dialog.Content>
            <Dialog.Title>About Page Intercepted</Dialog.Title>
            <Dialog.Description>Interpt routing in Next js</Dialog.Description>
            <Dialog.Close> close </Dialog.Close>
            <div>
              <MyCard
                props={{
                  title: "DialogBox",
                  description: "hello there",
                  content: (
                    <h2 className="text-red-400 font-semibold">
                      Hello there how is it going
                    </h2>
                  ),
                  footer: "my footer",
                }}
              />
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
