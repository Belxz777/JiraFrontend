/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/j1DcvNdc3P6
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/
import { Avatar } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Profile() {
  return (
    <main className="w-full py-6 space-y-6">
      <section className="container flex flex-col gap-4 px-4 md:gap-10 md:flex-row md:items-center lg:px-6">
        <article className="flex items-center space-x-4">
          <Avatar className="w-12 h-12" />
          <div className="space-y-1.5">
            <div className="flex items-center space-x-2">
              <h1 className="text-2xl font-bold">John Doe</h1>
              <Badge className="text-sm">Pro</Badge>
            </div>
            <dl className="grid gap-1 sm:grid-cols-2">
              <div className="flex items-center space-x-2">
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Name</dt>
                <dd className="font-medium">John</dd>
              </div>
              <div className="flex items-center space-x-2">
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Surname</dt>
                <dd className="font-medium">Doe</dd>
              </div>
              <div className="flex items-center space-x-2">
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Age</dt>
                <dd className="font-medium">32</dd>
              </div>
            </dl>
          </div>
        </article>
      </section>
      <section className="container">
        <div className="grid max-w-3xl gap-4 px-4 mx-auto lg:grid-cols-2 lg:max-w-5xl lg:gap-8 dark:lg:gap-6">
          <Card className="grid gap-4 sm:grid-cols-3">
            <CardContent className="col-span-2 space-y-4">
              <article className="space-y-2">
                <h2 className="text-xl font-bold">Project Name</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Description of the project goes here. It might be a bit longer, but we should be able to summarize it
                  in a few sentences.
                </p>
              </article>
              <div className="grid gap-0.5 sm:grid-cols-2">
                <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                  <div className="w-4 h-4 stroke-2.5" />
                  Project Lead
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                  <Calendar className="w-4 h-4 stroke-2.5" />
                  Created on
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-1 sm:justify-end sm:flex-row">
              <Button className="w-full sm:w-auto" variant="outline">
                View
              </Button>
              <Button className="w-full sm:w-auto" variant="outline">
                Edit
              </Button>
            </CardFooter>
          </Card>
          <Card className="grid gap-4 sm:grid-cols-3">
            <CardContent className="col-span-2 space-y-4">
              <article className="space-y-2">
                <h2 className="text-xl font-bold">Project Name</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Description of the project goes here. It might be a bit longer, but we should be able to summarize it
                  in a few sentences.
                </p>
              </article>
              <div className="grid gap-0.5 sm:grid-cols-2">
                <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                  <div className="w-4 h-4 stroke-2.5" />
                  Project Lead
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                  <Calendar className="w-4 h-4 stroke-2.5" />
                  Created on
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-1 sm:justify-end sm:flex-row">
              <Button className="w-full sm:w-auto" variant="outline">
                View
              </Button>
              <Button className="w-full sm:w-auto" variant="outline">
                Edit
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </main>
  )
}