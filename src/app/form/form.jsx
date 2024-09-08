export default function Form(){

const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
});

const onSubmit = (data) => {
    // Handle form submission here
    console.log(data);
};

return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} placeholder="Name" />
        {errors.name && <p>{errors.name.message}</p>}
        <input {...register("email")} placeholder="Email" />
        {errors.email && <p>{errors.email.message}</p>}
        <textarea {...register("message")} placeholder="Message" />
        {errors.message && <p>{errors.message.message}</p>}
        <button type="submit">Submit</button>
    </form>
);

}