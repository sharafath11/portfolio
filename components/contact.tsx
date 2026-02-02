"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { Loader2, ArrowUpRight } from "lucide-react"

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type ContactFormValues = z.infer<typeof contactSchema>

export default function Contact() {
  const container = useRef<HTMLDivElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  })

  useGSAP(() => {
    gsap.from(".contact-reveal", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      },
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.8,
      ease: "power2.out"
    })
  }, { scope: container })

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true)
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        toast.success("Message delivered. I'll get back to you shortly.")
        reset()
      } else {
        throw new Error("Failed to send")
      }
    } catch (error) {
      toast.error("Handshake failed. Please email me directly at abisharafath@gmail.com")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" ref={container} className="py-24 px-6 md:px-12 lg:px-24 bg-muted/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div className="contact-reveal space-y-12">
            <div>
              <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-muted-foreground mb-4">Inquiry</h2>
              <p className="text-4xl md:text-5xl font-display font-medium tracking-tight">
                Let's discuss your <span className="text-muted-foreground italic">next system</span>.
              </p>
            </div>

            <div className="space-y-8">
              <div className="group">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Primary channel</p>
                <a href="mailto:sharafathabi@gmail.com" className="text-xl md:text-2xl font-display hover:text-muted-foreground transition-colors flex items-center gap-2">
                  sharafathabi@gmail.com <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
              <div className="group">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Technical profiles</p>
                <div className="flex gap-8">
                    <a href="https://github.com/sharafath11" target="_blank" className="text-sm border-b border-border/50 hover:border-foreground transition-all">GitHub</a>
                    <a href="https://www.linkedin.com/in/sharafath-abi/" target="_blank" className="text-sm border-b border-border/50 hover:border-foreground transition-all">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="contact-reveal space-y-8">
            <div className="grid grid-cols-1 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Name</label>
                <Input 
                  {...register("name")}
                  className="rounded-none border-0 border-b border-border bg-transparent px-0 focus-visible:ring-0 focus-visible:border-foreground transition-all placeholder:text-muted-foreground/30"
                  placeholder="The Principal / Recruiter / Founder"
                />
                {errors.name && <p className="text-[10px] text-destructive uppercase tracking-widest">{errors.name.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Email</label>
                <Input 
                  {...register("email")}
                  className="rounded-none border-0 border-b border-border bg-transparent px-0 focus-visible:ring-0 focus-visible:border-foreground transition-all placeholder:text-muted-foreground/30"
                  placeholder="professional@organization.com"
                />
                {errors.email && <p className="text-[10px] text-destructive uppercase tracking-widest">{errors.email.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Requirements / Intent</label>
                <Textarea 
                  {...register("message")}
                  className="rounded-none border-0 border-b border-border bg-transparent px-0 focus-visible:ring-0 focus-visible:border-foreground transition-all min-h-[120px] resize-none placeholder:text-muted-foreground/30"
                  placeholder="Briefly describe the project or inquiry..."
                />
                {errors.message && <p className="text-[10px] text-destructive uppercase tracking-widest">{errors.message.message}</p>}
              </div>
            </div>

            <Button disabled={isSubmitting} className="rounded-none w-full py-8 text-lg font-display">
              {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : "Initiate Handshake"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
