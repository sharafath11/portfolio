"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, FileText } from "lucide-react"

export default function Resume() {
  return (
    <section id="resume" className="py-24">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="border border-muted bg-background/50 backdrop-blur-sm overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-500 to-cyan-500"></div>
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold tracking-tighter">Resume</CardTitle>
                <CardDescription>Download my resume to learn more about my experience and skills</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <div className="relative w-full max-w-md aspect-[3/4] mb-6 border border-muted rounded-md overflow-hidden">
                  <div className="absolute inset-0 bg-muted flex items-center justify-center">
                    <FileText className="h-16 w-16 text-muted-foreground/50" />
                  </div>
                </div>

                <Button size="lg" className="gap-2">
                  <Download className="h-4 w-4" />
                  Download Resume (PDF)
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
