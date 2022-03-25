import { useState } from "react";
import { IFormTypes } from "../../types/form";
import Button from "../shared/Button";
import Input from "../shared/Input";

const inputs = [
  { name: "imgUrl", type: "text", inputType: "text", placeholder: "Image url" },
  { name: "title", type: "text", inputType: "text", placeholder: "Title" },
  {
    name: "releaseYear",
    type: "number",
    inputType: "text",
    placeholder: "Release Year",
  },
  {
    name: "description",
    type: "text",
    inputType: "",
    placeholder: "Description",
  },
];

const CreateForm = () => {
  const [fields, setFields] = useState<IFormTypes>({
    imgUrl: "",
    title: "",
    releaseYear: 0,
    description: "",
  });
  return (
    <div className="flex flex-col gap-12 mt-8">
      <h2 className="text-text-200 text-2xl font-kanit">Create New Movie</h2>
      <form
        className="flex flex-col gap-8 lg:w-1/2 w-3/4"
        onSubmit={() => console.log("Hello")}
      >
        {inputs?.map((input) => (
          <Input
            name={input?.name}
            type={input?.type}
            placeholder={input?.placeholder}
            inputType={input?.inputType}
          />
        ))}

        <div className="flex gap-4">
          <Button buttonType="primary" type="submit">
            Create
          </Button>
          <Button  type="submit">
            Random fill
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateForm;
