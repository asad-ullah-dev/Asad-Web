import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import React from 'react'

const page = () => {
  return (
    <div className='pt-12'>
        <div className='bg-gray-800 p-5 rounded-md relative top-6 z-10'>
            <p className='text-lg font-bold text-white'>Authors table</p>
        </div>
      <Table className='pt-10'>
      <TableHeader>
        <TableRow>
          <TableHead className='text-gray-600 dark:text-white font-semibold'>Author</TableHead>
          <TableHead className='text-gray-600 dark:text-white font-semibold'>Function</TableHead>
          <TableHead className='text-gray-600 dark:text-white font-semibold'>Status</TableHead>
          <TableHead className='text-gray-600 dark:text-white font-semibold'>Employed</TableHead>
          <TableHead className='text-gray-600 dark:text-white font-semibold'></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>
            <div className="flex items-center gap-4">
               <div className='w-10 h-10'>
                    <img className='w-10 h-10 rounded' alt='table 1' src="https://demos.creative-tim.com/material-dashboard/assets/img/team-2.jpg" />
                </div>
                <div>
                    <h5 className='text-base font-semibold'>John Michael</h5>
                    <p className='text-sm font-normal text-gray-500 dark:text-white'>john@creative-tim.com</p>
                </div>
            </div>
          </TableCell>
          <TableCell>
            <p className='text-sm font-medium text-gray-500 dark:text-white'>Manager</p>
            <p className='text-sm font-normal text-gray-600 dark:text-white'>Organization</p>
          </TableCell>
          <TableCell>
            <p className='bg-green-600 px-4 py-0.5 rounded-md text-white inline'>Online</p>
          </TableCell>
          <TableCell>
            <p className='text-sm text-gray-600 dark:text-white font-semibold'>23/04/18</p>
          </TableCell>
          <TableCell>
            <p className='text-sm text-gray-600 dark:text-white'>Edit</p>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <div className="flex items-center gap-4">
                 <div className='w-10 h-10'>
                    <img className='w-10 h-10 rounded' alt='table 1' src="https://demos.creative-tim.com/material-dashboard/assets/img/team-3.jpg" />
                </div>
                <div>
                    <h5 className='text-base font-semibold'>Alexa Liras</h5>
                    <p className='text-sm font-normal text-gray-500 dark:text-white'>alexa@creative-tim.com</p>
                </div>
            </div>
          </TableCell>
          <TableCell>
            <p className='text-sm font-medium text-gray-500 dark:text-white'>Programator</p>
            <p className='text-sm font-normal text-gray-600 dark:text-white'>Developer</p>
          </TableCell>
          <TableCell>
            <p className='bg-gray-600 px-4 py-0.5 rounded-md text-white inline'>Offline</p>
          </TableCell>
          <TableCell>
            <p className='text-sm text-gray-600 dark:text-white font-semibold'>11/01/19</p>
          </TableCell>
          <TableCell>
            <p className='text-sm text-gray-600 dark:text-white'>Edit</p>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <div className="flex items-center gap-4">
                <div className='w-10 h-10'>
                    <img className='w-10 h-10 rounded' alt='table 1' src="https://demos.creative-tim.com/material-dashboard/assets/img/team-4.jpg" />
                </div>
                <div>
                    <h5 className='text-base font-semibold'>Laurent Perrier</h5>
                    <p className='text-sm font-normal text-gray-500 dark:text-white'>laurent@creative-tim.com</p>
                </div>
            </div>
          </TableCell>
          <TableCell>
            <p className='text-sm font-medium text-gray-500 dark:text-white'>Executive</p>
            <p className='text-sm font-normal text-gray-600 dark:text-white'>Projects</p>
          </TableCell>
          <TableCell>
            <p className='bg-green-600 px-4 py-0.5 rounded-md text-white inline'>Online</p>
          </TableCell>
          <TableCell>
            <p className='text-sm text-gray-600 dark:text-white font-semibold'>19/09/17</p>
          </TableCell>
          <TableCell>
            <p className='text-sm text-gray-600 dark:text-white'>Edit</p>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <div className="flex items-center gap-4">
                <div className='w-10 h-10'>
                    <img className='w-10 h-10 rounded' alt='table 1' src="https://demos.creative-tim.com/material-dashboard/assets/img/team-3.jpg" />
                </div>
                <div>
                    <h5 className='text-base font-semibold'>Michael Levi</h5>
                    <p className='text-sm font-normal text-gray-500 dark:text-white'>michael@creative-tim.com</p>
                </div>
            </div>
          </TableCell>
          <TableCell>
            <p className='text-sm font-medium text-gray-500 dark:text-white'>Programator</p>
            <p className='text-sm font-normal text-gray-600 dark:text-white'>Developer</p>
          </TableCell>
          <TableCell>
            <p className='bg-green-600 px-4 py-0.5 rounded-md text-white inline'>Online</p>
          </TableCell>
          <TableCell>
            <p className='text-sm text-gray-600 dark:text-white font-semibold'>24/12/08</p>
          </TableCell>
          <TableCell>
            <p className='text-sm text-gray-600 dark:text-white'>Edit</p>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <div className="flex items-center gap-4">
                 <div className='w-10 h-10'>
                    <img className='w-10 h-10 rounded' alt='table 1' src="https://demos.creative-tim.com/material-dashboard/assets/img/team-2.jpg" />
                </div>
                <div>
                    <h5 className='text-base font-semibold'>Richard Gran</h5>
                    <p className='text-sm font-normal text-gray-500 dark:text-white'>richard@creative-tim.com</p>
                </div>
            </div>
          </TableCell>
          <TableCell>
            <p className='text-sm font-medium text-gray-500 dark:text-white'>Manager</p>
            <p className='text-sm font-normal text-gray-600 dark:text-white'>Executive</p>
          </TableCell>
          <TableCell>
            <p className='bg-gray-600 px-4 py-0.5 rounded-md text-white inline'>Offline</p>
          </TableCell>
          <TableCell>
            <p className='text-sm text-gray-600 dark:text-white font-semibold'>04/10/21</p>
          </TableCell>
          <TableCell>
            <p className='text-sm text-gray-600 dark:text-white'>Edit</p>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <div className="flex items-center gap-4">
                <div className='w-10 h-10'>
                    <img className='w-10 h-10 rounded' alt='table 1' src="https://demos.creative-tim.com/material-dashboard/assets/img/team-4.jpg" />
                </div>
                <div>
                    <h5 className='text-base font-semibold'>Miriam Eric</h5>
                    <p className='text-sm font-normal text-gray-500 dark:text-white'>miriam@creative-tim.com</p>
                </div>
            </div>
          </TableCell>
          <TableCell>
            <p className='text-sm font-medium text-gray-500 dark:text-white'>Programator</p>
            <p className='text-sm font-normal text-gray-600 dark:text-white'>Developer</p>
          </TableCell>
          <TableCell>
            <p className='bg-gray-600 px-4 py-0.5 rounded-md text-white inline'>Offline</p>
          </TableCell>
          <TableCell>
            <p className='text-sm text-gray-600 dark:text-white font-semibold'>14/09/20</p>
          </TableCell>
          <TableCell>
            <p className='text-sm text-gray-600 dark:text-white'>Edit</p>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>

        <div className='bg-gray-800 p-5 rounded-md relative top-6 z-10 mt-6'>
        <p className='text-lg font-bold text-white'>Projects table</p>
    </div>
      <Table className='pt-10'>
      <TableHeader>
        <TableRow>
          <TableHead className='text-gray-600 dark:text-white font-semibold'>Project</TableHead>
          <TableHead className='text-gray-600 dark:text-white font-semibold'>Budget</TableHead>
          <TableHead className='text-gray-600 dark:text-white font-semibold'>Status</TableHead>
          <TableHead className='text-gray-600 dark:text-white font-semibold'>Completion</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>
            <div className="flex items-center gap-4">
                <div className='w-8 h-8'>
                    <img className='w-8 h-8' alt='table 1' src="https://demos.creative-tim.com/material-dashboard/assets/img/small-logos/logo-asana.svg" />
                </div>
                <div>
                    <h5 className='text-base font-semibold'>Asana</h5>
                </div>
            </div>
          </TableCell>
          <TableCell className='text-sm font-medium text-gray-500 dark:text-white'>$2,500</TableCell>
          <TableCell className='text-sm font-medium text-gray-600 dark:text-white'>working</TableCell>
          <TableCell className='text-sm font-semibold text-gray-500 dark:text-white'>60%</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <div className="flex items-center gap-4">
                 <div className='w-8 h-8'>
                    <img className='w-8 h-8' alt='table 1' src="https://demos.creative-tim.com/material-dashboard/assets/img/small-logos/github.svg" />
                </div>
                <div>
                    <h5 className='text-base font-semibold'>Github</h5>
                </div>
            </div>
          </TableCell>
          <TableCell className='text-sm font-medium text-gray-500 dark:text-white'>$5,000</TableCell>
          <TableCell className='text-sm font-medium text-gray-600 dark:text-white'>done</TableCell>
          <TableCell className='text-sm font-semibold text-gray-500 dark:text-white'>100%</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <div className="flex items-center gap-4">
                 <div className='w-8 h-8'>
                    <img className='w-8 h-8' alt='table 1' src="https://demos.creative-tim.com/material-dashboard/assets/img/small-logos/logo-atlassian.svg" />
                </div>
                <div>
                    <h5 className='text-base font-semibold'>Atlassian</h5>
                </div>
            </div>
          </TableCell>
          <TableCell className='text-sm font-medium text-gray-500 dark:text-white'>$3,400</TableCell>
          <TableCell className='text-sm font-medium text-gray-600 dark:text-white'>canceled</TableCell>
          <TableCell className='text-sm font-semibold text-gray-500 dark:text-white'>30%</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <div className="flex items-center gap-4">
               <div className='w-8 h-8'>
                    <img className='w-8 h-8' alt='table 1' src="https://demos.creative-tim.com/material-dashboard/assets/img/small-logos/bootstrap.svg" />
                </div>
                <div>
                    <h5 className='text-base font-semibold'>Bootstrap</h5>
                </div>
            </div>
          </TableCell>
          <TableCell className='text-sm font-medium text-gray-500 dark:text-white'>$14,000</TableCell>
          <TableCell className='text-sm font-medium text-gray-600 dark:text-white'>working</TableCell>
          <TableCell className='text-sm font-semibold text-gray-500 dark:text-white'>80%</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <div className="flex items-center gap-4">
               <div className='w-8 h-8'>
                    <img className='w-8 h-8' alt='table 1' src="https://demos.creative-tim.com/material-dashboard/assets/img/small-logos/logo-slack.svg" />
                </div>
                <div>
                    <h5 className='text-base font-semibold'>Slack</h5>
                </div>
            </div>
          </TableCell>
          <TableCell className='text-sm font-medium text-gray-500 dark:text-white'>$1,000</TableCell>
          <TableCell className='text-sm font-medium text-gray-600 dark:text-white'>canceled</TableCell>
          <TableCell className='text-sm font-semibold text-gray-500 dark:text-white'>0%</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <div className="flex items-center gap-4">
                <div className='w-8 h-8'>
                    <img className='w-8 h-8' alt='table 1' src="https://demos.creative-tim.com/material-dashboard/assets/img/small-logos/devto.svg" />
                </div>
                <div>
                    <h5 className='text-base font-semibold'>Devto</h5>
                </div>
            </div>
          </TableCell>
          <TableCell className='text-sm font-medium text-gray-500 dark:text-white'>$2,300</TableCell>
          <TableCell className='text-sm font-medium text-gray-600 dark:text-white'>done</TableCell>
          <TableCell className='text-sm font-semibold text-gray-500 dark:text-white'>100%</TableCell>
        </TableRow>
      </TableBody>
    </Table>
    </div>
  )
}

export default page
