import * as React from "react"

import { cn } from "@/lib/utils"

type CardShape = "rounded" | "circular" | "circle"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  shape?: CardShape
  radius?: number
}

const shapeClasses: Record<CardShape, string> = {
  rounded: "rounded-lg",
  circular: "rounded-full",
  circle: "rounded-full aspect-square w-full h-auto"
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, shape = "rounded", radius, ...props }, ref) => {
    const isCircle = shape === "circle"
    const circleStyle = isCircle && radius ? { borderRadius: `${radius}px` } : undefined
    
    return (
      <div
        ref={ref}
        className={cn(
          "border !bg-transparent text-card-foreground shadow-sm",
          shapeClasses[shape],
          isCircle && "flex flex-col items-center justify-center",
          className
        )}
        style={circleStyle}
        {...props}
      />
    )
  }
)
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6 items-center text-center", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0 flex flex-col items-center text-center", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center justify-center p-6 pt-0 text-center", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
