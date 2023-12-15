<template>
    <section
        class="container mx-auto bg-[url('~/assets/bg.webp')] min-h-[400px] bg-cover relative flex items-center justify-center">
        <div class="z-10 flex items-center justify-center flex-col gap-12">
            <div class="flex flex-col gap-4 relative">
                <img src="~/assets/logo.webp" alt="..." class="w-4/5 mx-auto ">
                <h1 class="text-5xl mx-auto w-fit tracking-wide [text-shadow:_2px_2px_2px_rgb(0_0_0_/_50%)]">Recipe Browser
                </h1>
                <span
                    class="absolute right-2 top-6 z-20 text-2xl transform rotate-12 tracking-wide [text-shadow:_2px_2px_2px_rgb(0_0_0_/_50%)]">for
                    the web!</span>
            </div>
            <div class="flex items-center justify-center w-full">
                <input type="text" placeholder="Enter item name here..."
                    class="input input-bordered input-primary w-full max-w-xs tracking-widest placeholder:text-neutral-content/40" />
            </div>
        </div>
        <div class="w-full h-full bg-gradient-to-t from-base-100 absolute bottom-0"></div>
    </section>
</template>