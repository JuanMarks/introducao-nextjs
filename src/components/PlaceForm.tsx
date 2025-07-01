'use client';

import {z} from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const placeFormValidationSchema = z.object({
    name: z.string().min(3, "Name is required"),
    type: z.enum(["restaurant", "cafe", "bar", "shop"], {
        errorMap: () => ({ message: "Type is required" }),
    }),
    phone: z.string().min(8, "Phone number must be at least 10 characters long").optional(),
    lat: z.number().optional(),
    lng: z.number().optional(),
});

type PlaceFormData = z.infer<typeof placeFormValidationSchema>;

export default function PlaceForm() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitSuccessful
         },
    } = useForm<PlaceFormData>({
        resolver: zodResolver(placeFormValidationSchema),  
    });

    const onSubmit = (data: PlaceFormData) => {
        console.log("Form submitted:", data);
        // Aqui você pode enviar os dados para o servidor ou processá-los conforme necessário
    };
    
    return (
        <form className="space-y-4 max-w-md mx-auto p-6 bg-gray-200 shadow-md rounded" onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="name">Name:</label>
                <input 
                    {...register("name")} 
                    className="w-full border rounded px-2 py-1" type="text" id="name" name="name" required />
                    {errors.name && (
                        <p className="text-red-500 text-sm">{errors.name.message}</p>
                    )}
            </div>
            {/* Tipo */}
            <div>
                <label htmlFor="type">Type:</label>
                <select 
                    {...register("type")} 
                    className="w-full border rounded px-2 py-1" id="type" name="type" required>
                    <option value="">Select a type</option>
                    <option value="restaurant">Restaurant</option>
                    <option value="cafe">Café</option>
                    <option value="bar">Bar</option>
                    <option value="shop">Shop</option>
                </select>
                {errors.type && (
                    <p className="text-red-500 text-sm">{errors.type.message}</p>
                )}
            </div>
            {/* Telefone */}
            <div>
                <label htmlFor="phone">Phone:</label>
                <input 
                    {...register("phone")} 
                    className="w-full border rounded px-2 py-1" type="text" id="phone" name="phone" />
                {errors.phone && (
                    <p className="text-red-500 text-sm">{errors.phone.message}</p>
                )}
            </div>

            <button className="bg-blue-500 text-white cursor-pointer px-4 py-1 rounded hover:bg-blue-700" type="submit">Registrar Local</button>
        </form>
    );
}