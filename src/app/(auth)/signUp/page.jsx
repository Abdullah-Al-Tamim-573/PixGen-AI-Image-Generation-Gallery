"use client"
import { useForm } from "react-hook-form";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";







export default function SignUpPage() {

    let route = useRouter()

   const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const handleOnSubmit = async(authData) => {
     let {name, email, password, imageUrl} = authData;


     const { data, error } = await authClient.signUp.email({
        email, 
        password, 
        name, 
        image:imageUrl,
       
    }, {
        onSuccess: (ctx) => {
            route.push('/');
           
        },
        onError: (ctx) => {
            
            alert(ctx.error.message);
        },
    });

    
  };


  const handleGoogleAuth = async() => {
    const data = await authClient.signIn.social({
    provider: "google",
  });
  }

  return (
    <Card className="border mx-auto w-125 py-10 mt-5">
      <h1 className="text-center text-2xl font-bold">Sign Up</h1>

      <button onClick={handleGoogleAuth} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
				<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
			</svg>
			<p>Login with Google</p>
		</button>

      <Form onSubmit={handleSubmit(handleOnSubmit)} className="flex w-96 mx-auto flex-col gap-4">
        {/* name input */}
        <TextField isRequired name="name" type="text">
          <Label>Name</Label>
          <Input {...register("name")} placeholder="Enter your name" />
          <FieldError />
        </TextField>
        {/* image url input */}
        <TextField isRequired name="image" type="text">
          <Label>Image URL</Label>
          <Input {...register("imageUrl")} placeholder="Image URL" />
          <FieldError />
        </TextField>
      {/* email input */}
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }

            return null;
          }}
        >
          <Label>Email</Label>
          <Input {...register("email")} placeholder="john@example.com" />
          <FieldError />
        </TextField>
     {/* password input */}
        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }

            return null;
          }}
        >
          <Label>Password</Label>
          <Input {...register("password")} placeholder="Enter your password" />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>

        <div className="flex gap-2">
          <Button type="submit">
            <Check />
            Submit
          </Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
      </Form>
    </Card>
  );
}