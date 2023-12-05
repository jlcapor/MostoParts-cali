import { Shell } from "@/components/shells/shell"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function NewProductLoading() {
return (
<Shell variant="sidebar">
    <Card>
        <CardHeader className="space-y-1">
            <Skeleton className="h-6 w-1/4" />
            <Skeleton className="h-4 w-2/4" />
        </CardHeader>
        <CardContent>
                <div className=" p-4 md:p-6">
                  <div className="mb-4">
                      <Skeleton className="h-4 w-32" />
                      <div className="w-full relative mt-2 rounded-md">
                          <Skeleton className="h-6" />
                      </div>
                  </div>


                  <div className="mb-4">
                      <Skeleton className="h-4 w-32"/>
                      <div className="w-full relative mt-2 rounded-md">
                          <Skeleton className="h-6" />
                      </div>
                  </div>

                  <div className="mb-4">
                      <Skeleton className="h-4 w-32" />
                      <div className="w-full relative mt-2 rounded-md">
                          <Skeleton className="h-6" />
                      </div>
                  </div>

                    <div className="mb-4">
                        <Skeleton className="h-4 w-32" />
                        <div className="relative mt-2 rounded-md">
                            <Skeleton className="h-6" />
                        </div>
                    </div>
                    <div className="mb-4">
                            <div className="rounded-md border px-[14px] py-3">
                                    <div className="flex gap-4">
                                        <div className="flex items-center">
                                            <Skeleton className="h-4 w-32" />
                                            <Skeleton className="h-6" />
                                        </div>
                                    </div>
                            </div>
                    </div>

                    <div className="mb-4">
                      <Skeleton className="h-4 w-32" />
                      <div className="relative mt-2 rounded-md">
                          <Skeleton className="h-6" />
                      </div>
                  </div>
                </div>
              <div className="mt-6 flex justify-end gap-4">
                  <Skeleton className="h-10 w-32" />
                  <Skeleton className="h-20" />
              </div>
        </CardContent>
        <CardFooter>
            
        </CardFooter>
    </Card>
</Shell>

)
}
