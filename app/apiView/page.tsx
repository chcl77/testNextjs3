"use client"
import { supabase } from "@/utils/supabase"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import {
    IconBrandJavascript,
    IconCopy,
    IconCornerDownLeft,
    IconRefresh,
  } from "@tabler/icons-react"
  import {
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
    InputGroupText,
    InputGroupTextarea,
  } from "@/components/ui/input-group"
import {
    Field,
    FieldDescription,
    FieldLabel,
  } from "@/components/ui/field"
  import { Input } from "@/components/ui/input"
  import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useReducer, useState } from "react"
import { useRouter } from "next/navigation"
  export default function ApiView(){
    const [profile, setProfile] = useState("")
    const [problem, setProblem] = useState("")
    const [profile_result, setProfileResult] = useState<any>(null)
    const [problem_result, setProblemResult] = useState<any>(null)
    const checkProfile = async () => {
        const response = await fetch(`https://alfa-leetcode-api.onrender.com/${profile}`)
        const res = await response.json()
        console.log(res)
        setProfileResult(res)
    }
    const checkProblem = async () => {
        const arr = problem.split('\n')
        const str = arr.join("+")
        console.log("str", str)
        
        const response = await fetch(`https://alfa-leetcode-api.onrender.com/problems?tags=${str}`)
        const res = await response.json()
        console.log(res)
        setProblemResult(res)
    }
    return(
        
        <div className="mx-10 mt-5">
            {/* <Field className="mt-5 ml-3 w-100">
        <FieldLabel htmlFor="input-field-username">Check Profile</FieldLabel>
        <Input
          id="input-field-username"
          type="text"
          placeholder="Enter your profile"
          onChange={(e) => {setProfile(e.target.value)}}
        />
        <Button>Test</Button>
        <FieldDescription>
          Checking the Profile in leet code.
        </FieldDescription>
      </Field> */}
        <div className="w-100">
        <InputGroup className="">
        <InputGroupTextarea
          id="textarea-code-32"
          placeholder="Enter the profile"
          className="min-h-[200px]"
          onChange={(e) => {setProfile(e.target.value)}}
        />
        <InputGroupAddon align="block-end" className="border-t">
          <InputGroupText>Test the Leetcode Api</InputGroupText>
          <InputGroupButton size="sm" className="ml-auto" variant="default" onClick={checkProfile}>
            Run <IconCornerDownLeft />
          </InputGroupButton>
        </InputGroupAddon>
        <InputGroupAddon align="block-start" className="border-b">
          <InputGroupText className="font-mono font-medium">
            Profile Test
          </InputGroupText>
          <InputGroupButton className="ml-auto" size="icon-xs">
            <IconRefresh />
          </InputGroupButton>
          <InputGroupButton variant="ghost" size="icon-xs">
            <IconCopy />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>

      <Card className=" mt-5">
        <CardHeader>
            <CardTitle>Profile Result</CardTitle>
        </CardHeader>
        <CardContent>
            {profile_result ? (
                <>
                <p>Username: {profile_result.username} </p>
                <p>Ranking: {profile_result.ranking}</p>
                
                </>
            ) :
            (
                <p>No Searched</p>
            )}
            
        </CardContent>
        </Card>
        </div>
      
        <div className="w-100 mt-20">
        <InputGroup className="">
        <InputGroupTextarea
          id="textarea-code-32"
          placeholder="Enter the problem tags"
          className="min-h-[200px]"
          onChange={(e) => {setProblem(e.target.value)}}
        />
        <InputGroupAddon align="block-end" className="border-t">
          <InputGroupText>Test the Leetcode Api</InputGroupText>
          <InputGroupButton size="sm" className="ml-auto" variant="default" onClick={checkProblem}>
            Run <IconCornerDownLeft />
          </InputGroupButton>
        </InputGroupAddon>
        <InputGroupAddon align="block-start" className="border-b">
          <InputGroupText className="font-mono font-medium">
            Problem Test
          </InputGroupText>
          <InputGroupButton className="ml-auto" size="icon-xs">
            <IconRefresh />
          </InputGroupButton>
          <InputGroupButton variant="ghost" size="icon-xs">
            <IconCopy />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>

      <Card className=" mt-5">
        <CardHeader>
            <CardTitle>Problem Result</CardTitle>
        </CardHeader>
        <CardContent>
            {problem_result ? (
                <>
                <p>totalQuestions: {problem_result.totalQuestions} </p>
                <br />
                {problem_result.problemsetQuestionList.map((elem:any, idx:any) => (
                    <div key={idx}>
                        <h2 className="font-bold">Problem: #{idx+1}</h2> 
                        <p>Title : {elem.title}</p>
                        <p>Similiarity : {elem.acRate.toFixed(1)}% </p>
                        <p>Difficulty : {elem.difficulty} </p> <br />
                    </div>
                ))}
                
                
                </>
            ) :
            (
                <p>No Searched</p>
            )}
            
        </CardContent>
        </Card>
        </div>
        
            
        </div>
    )
  }

  
  
 
  