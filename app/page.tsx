"use client";

import styles from "./style.module.css";
import * as React from "react";
import dayjs from "dayjs";
import { useState } from "react";
import Wallet from 'sats-connect'

import { data } from "./data";
export default function Home() {
  const {
    totalReservations,
    allocation,
    reservationsSortedByNumReservedTotal,
  } = data;
  const [arrowHidden, setArrowHidden] = useState(false);
  const [currentAddress, setCurrentAddress] = useState("");
  const showDetail = (address: string) => {
    if (address === currentAddress) {
      setArrowHidden(!arrowHidden);
    } else {
      setArrowHidden(true);
      setCurrentAddress(address);
    }
  };

  const connectWallet = async () => {
    const res = await Wallet.request('wallet_requestPermissions', undefined);
  }

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="w-full">
          <div className="m-auto flex h-14 w-full max-w-screen-xl items-center justify-between px-4 pt-4 md:px-0 md:pt-0">
            <div className="flex items-center justify-between space-x-6">
              <a href="/">
                <div className="inline-flex h-[19px] w-[87px] items-start justify-start">
                  <div className="text-center text-lg font-bold leading-[18.40px] text-neutral-900">
                    gm.
                  </div>
                  <div className="text-center text-lg font-normal leading-[18.40px] text-neutral-900">
                    scribe
                  </div>
                </div>
              </a>
            </div>
            <div className="flex items-center justify-between space-x-6">
              <a className="hidden md:block" href="https://docs.gmscribe.art">
                Docs
              </a>
              <a className="hidden md:block" href="/apply">
                Launch with us
              </a>
              <button
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                type="button"
                aria-haspopup="dialog"
                aria-expanded="false"
                aria-controls="radix-:r0:"
                data-state="closed"
                onClick={connectWallet}
              >
                Connect wallet
              </button>
            </div>
          </div>
        </div>
        <div className="w-full max-w-screen-xl">
          <div className="mt-20">
            <div className="flex flex-col justify-between px-4 md:flex-row md:px-0">
              <div className="">
                <div>
                  <h1
                    id="the-machine"
                    className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-black mb-2 md:mb-4"
                  >
                    <a href="#the-machine">The Machine</a>
                  </h1>
                  <div className="md:text-md text-base lg:text-lg">
                    Stacking the Essence of Form
                  </div>
                  <div className="md:text-md text-base lg:text-lg">
                    — by <span className="font-bold">Ismahelio</span>
                  </div>
                </div>
                <div className="mt-14">
                  <div>
                    <div className="">
                      <div className="space-y-4">
                        <div>
                          <div className="flex items-center space-x-2">
                            <div className=" text-lg font-semibold">
                              Allowlist
                            </div>
                            <div className="inline-flex items-center justify-start gap-2 rounded bg-black/5 px-2 py-0.5">
                              <div className="text-xs font-semibold text-neutral-500">
                                Finished
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center text-xs text-neutral-400 md:text-sm">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                                data-slot="icon"
                                width="16"
                                height="16"
                                className="mb-[3px] mr-1.5 block"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                                ></path>
                              </svg>
                              Opens Jun 05, 2024 @ 21:00 GMT+8
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center text-xs text-neutral-400 md:text-sm">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                                data-slot="icon"
                                width="16"
                                height="16"
                                className="mb-[3px] mr-1.5 block"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                                ></path>
                              </svg>
                              Closes Jun 06, 2024 @ 21:00 GMT+8
                            </div>
                          </div>
                        </div>
                        <div className="">
                          <div className="flex items-center space-x-2">
                            <div className=" text-lg font-semibold">
                              Ranked auction with rebate
                            </div>
                            <div className="inline-flex items-center justify-start gap-2 rounded bg-black/5 px-2 py-0.5">
                              <div className="text-xs font-semibold text-neutral-500">
                                Finished
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center text-xs text-neutral-400 md:text-sm">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                                data-slot="icon"
                                width="16"
                                height="16"
                                className="mb-[3px] mr-1.5 block"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                                ></path>
                              </svg>
                              Opens Jun 06, 2024 @ 21:00 GMT+8
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center text-xs text-neutral-400 md:text-sm">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                                data-slot="icon"
                                width="16"
                                height="16"
                                className="mb-[3px] mr-1.5 block"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                                ></path>
                              </svg>
                              Closes Jun 08, 2024 @ 21:20 GMT+8
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pt-6">
                        <div className="flex flex-row justify-start gap-8 flex-wrap">
                          <div className="text-left tracking-tight">
                            <div className="text-xs md:text-sm text-neutral-400">
                              Pieces
                            </div>
                            <div className="text-lg md:text-2xl">
                              <span className="font-medium">100</span>
                            </div>
                          </div>
                          <div className="text-left tracking-tight">
                            <div className="text-xs md:text-sm text-neutral-400">
                              Current clearing price
                            </div>
                            <div className="text-lg md:text-2xl">
                              <span className="font-medium">0.002</span>
                              <span className="font-medium"> ₿</span>
                            </div>
                            <div className="text-xs md:text-sm text-neutral-400">
                              114.47 USD
                            </div>
                          </div>
                          <div className="text-left tracking-tight">
                            <div className="text-xs md:text-sm text-neutral-400">
                              Highest bid
                            </div>
                            <div className="text-lg md:text-2xl">
                              <span className="font-medium">0.0041</span>
                              <span className="font-medium"> ₿</span>
                            </div>
                            <div className="text-xs md:text-sm text-neutral-400">
                              234.67 USD
                            </div>
                          </div>
                        </div>
                        <div className="mt-6">
                          <div className="-mx-2 flex-col items-start justify-start gap-4 rounded-lg bg-stone-300/20 p-3 text-sm empty:hidden md:p-5 md:text-base">
                            <button
                              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-neutral-900 text-zinc-50 hover:bg-neutral-900/90 h-11 rounded-md px-8 w-full"
                              type="button"
                              aria-haspopup="dialog"
                              aria-expanded="false"
                              aria-controls="radix-:r3:"
                              data-state="closed"
                              onClick={connectWallet}
                            >
                              Connect wallet
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ml-6 mt-3 hidden md:block">
                <img
                  alt="The Machine by Ismahelio"
                  width="500"
                  height="579.6703296703297"
                  decoding="async"
                  data-nimg="1"
                  style={{ color: "transparent" }}
                  src="/machineImg.webp"
                  // style="color:transparent"
                  // srcset="/_next/image?url=%2Fcollections%2Fthe-machine%2Fheader.png&amp;w=640&amp;q=75 1x, /_next/image?url=%2Fcollections%2Fthe-machine%2Fheader.png&amp;w=1080&amp;q=75 2x"
                  // src="/_next/image?url=%2Fcollections%2Fthe-machine%2Fheader.png&amp;w=1080&amp;q=75"
                />
              </div>
            </div>
          </div>
          <div className="pt-20">
            <div className="mb-20">
              <div className="relative left-1/2 w-screen -translate-x-1/2 border-b border-neutral-300">
                <div className="overflow-x-auto">
                  <div className="m-auto flex w-full max-w-screen-xl text-center">
                    <a
                      className="relative -bottom-[1px] p-4 md:p-6 cursor-pointer font-medium text-base md:text-lg text-neutral-900 border-b-2 border-neutral-900"
                      href="/collections/the-machine/allowlist"
                    >
                      Allowlist
                    </a>
                    <a
                      className="relative -bottom-[1px] p-4 md:p-6 cursor-pointer font-medium text-base md:text-lg text-neutral-400 hover:text-neutral-500"
                      href="/collections/the-machine/auction"
                    >
                      Auction
                    </a>
                    <a
                      className="relative -bottom-[1px] p-4 md:p-6 cursor-pointer font-medium text-base md:text-lg text-neutral-400 hover:text-neutral-500"
                      href="/collections/the-machine/collection"
                    >
                      Collection
                    </a>
                    <a
                      className="relative -bottom-[1px] p-4 md:p-6 cursor-pointer font-medium text-base md:text-lg text-neutral-400 hover:text-neutral-500"
                      href="/collections/the-machine/explorer"
                    >
                      Explorer
                    </a>
                    <a
                      className="relative -bottom-[1px] p-4 md:p-6 cursor-pointer font-medium text-base md:text-lg text-neutral-400 hover:text-neutral-500"
                      href="/collections/the-machine/gallery"
                    >
                      Gallery
                    </a>
                    <a
                      className="relative -bottom-[1px] p-4 md:p-6 cursor-pointer font-medium text-base md:text-lg text-neutral-400 hover:text-neutral-500"
                      href="/collections/the-machine/faq"
                    >
                      FAQ
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-whiteX relative left-1/2 w-screen -translate-x-1/2">
                <div className="m-auto w-full max-w-screen-xl px-6 py-12">
                  <div className="flex flex-col items-center justify-center space-y-2 pb-10 md:items-start md:justify-start">
                    <div className="flex flex-col items-center justify-center space-y-2 text-center md:flex-row md:justify-start md:space-x-4 md:space-y-0 md:text-left">
                      <h3
                        id="allowlist"
                        className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight"
                      >
                        <a href="#allowlist">Allowlist</a>
                      </h3>
                      <div className="flex items-center space-x-4">
                        <div className="inline-flex items-center justify-start gap-2 rounded bg-black/5 px-2 py-0.5">
                          <div className="text-xs font-semibold text-neutral-500">
                            Finished
                          </div>
                        </div>
                        <div className="rounded bg-black/5 px-2 py-0.5 text-xs font-semibold text-neutral-500">
                          {allocation}/{totalReservations} Reservations
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="-mx-4 md:mx-0">
                    <table className="w-full border-b text-sm md:text-base">
                      <tbody>
                        <tr>
                          <th className="px-2 py-1 text-left"></th>
                          <th className="px-2 py-1 text-left">Address</th>
                          <th className="px-2 py-1 text-left">Deposit (BTC)</th>
                          <th className="hidden px-2 py-1 text-right md:table-cell">
                            Deposit (USD)
                          </th>
                          <th className="px-2 py-1 text-right">Reservations</th>
                          <th className="px-2 py-1 text-right"></th>
                        </tr>
                        {reservationsSortedByNumReservedTotal.map((item) => (
                          <>
                            <tr
                              className="cursor-pointer transition duration-500 ease-in-out hover:bg-black/5"
                              onClick={() => showDetail(item.sender)}
                            >
                              <td className="w-6 border-t py-2 pl-2">
                                {!(
                                  arrowHidden && currentAddress === item.sender
                                ) ? (
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="lucide lucide-chevron-down size-4 text-neutral-400"
                                  >
                                    <path d="m6 9 6 6 6-6"></path>
                                  </svg>
                                ) : (
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="lucide lucide-chevron-up size-4 text-neutral-400"
                                  >
                                    <path d="m18 15-6-6-6 6"></path>
                                  </svg>
                                )}
                              </td>
                              <td className="border-t p-2">
                                <div className="flex items-center">
                                  <div className="mr-2">
                                    <div className={styles["tr-style"]}></div>
                                  </div>
                                  {/* <div className="font-mono md:hidden">
                                  bc1p5…tpe
                                </div> */}
                                  <div className="hidden font-mono md:block">
                                    {item.sender}
                                  </div>
                                </div>
                              </td>
                              <td className="border-t p-2 font-mono">
                                <div>{item.total / 100000000}</div>
                              </td>
                              <td className="hidden border-t p-2 text-right font-mono md:table-cell">
                                <div>$228.30</div>
                              </td>
                              <td className="border-t p-2 text-right font-mono">
                                <div>{item.numReservedTotal}x</div>
                              </td>
                              <td className="border-t p-2 text-right">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                  aria-hidden="true"
                                  data-slot="icon"
                                  className="ml-2 inline size-5 text-green-700/90"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                                    clip-rule="evenodd"
                                  ></path>
                                </svg>
                              </td>
                            </tr>
                            {arrowHidden && item.sender === currentAddress && (
                              <tr className="bg-neutral-50 transition ease-in duration-100">
                                <td className="border-tx">
                                  <table className="w-full font-mono text-xs text-neutral-500">
                                    <tbody>
                                      <tr>
                                        <th className="p-1 md:p-2 text-left font-medium uppercase md:pl-4">
                                          Confirmed at
                                        </th>
                                        <th className="p-1 text-left font-medium uppercase md:p-2">
                                          BTC
                                        </th>
                                        <th className="hidden p-1 text-left font-medium uppercase md:table-cell md:p-2">
                                          USD
                                        </th>
                                        <th className="p-1 text-left font-medium uppercase md:p-2">
                                          Reservations
                                        </th>
                                        <th className="p-1 pr-5 text-right font-medium uppercase md:p-2 md:pr-8">
                                          Tx
                                        </th>
                                      </tr>
                                      <tr className="hover:bg-neutral-300/10">
                                        <td className="py-2 px-1 md:px-2 border-t border-black/5 md:pl-4">
                                          <span className="">
                                            {dayjs(item?.txs[0].confirmedAt * 1000).format('DD/MM/YYYY HH:mm:ss')}
                                          </span>
                                        </td>
                                        <td className="border-t border-black/5 px-1 py-2 md:px-2">
                                          0.004
                                        </td>
                                        <td className="hidden border-t border-black/5 px-1 py-2 md:table-cell md:px-2">
                                          $227.33
                                        </td>
                                        <td className="border-t border-black/5 px-1 py-2 md:px-2">
                                          <span>1x </span>
                                          <span className="rounded bg-cyan-100/70 px-1 py-0.5 text-cyan-600">
                                            BTC wallet
                                          </span>
                                        </td>
                                        <td className="border-t border-black/5 px-1 py-2 text-right md:px-2">
                                          <span className="">
                                            <a
                                              href={`https://mempool.space/tx/${item.txs[0].id}`}
                                              target="_blank"
                                              className="rounded hover:bg-neutral-300/30 md:px-2 md:py-1"
                                            >
                                              view
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-arrow-up-right relative -top-0.5 ml-0.5 inline-block size-3"
                                              >
                                                <path d="M7 7h10v10"></path>
                                                <path d="M7 17 17 7"></path>
                                              </svg>
                                            </a>
                                          </span>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="py-1.5 pt-2 px-1 md:px-2 border-t-2 border-black/10 uppercase md:pl-4">
                                          Total unconfirmed
                                        </td>
                                        <td
                                          className="border-t-2 border-black/10 px-1 py-1.5 pt-2 md:px-2"
                                        >
                                          0
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="py-1.5 px-1 md:px-2 uppercase md:pl-4">
                                          Total confirmed
                                        </td>
                                        <td
                                          className="px-1 py-1.5 md:px-2"
                                        >
                                          0.004
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="py-1.5 px-1 md:px-2 uppercase md:pl-4">
                                          Total Bid
                                        </td>
                                        <td
                                          className="px-1 py-1.5 md:px-2"
                                        >
                                          0.004
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            )}
                          </>
                        ))}
                        {/* <tr
                          className="cursor-pointer transition duration-500 ease-in-out hover:bg-black/5"
                          onClick={showDetail}
                        >
                          <td className="w-6 border-t py-2 pl-2">
                            {!arrowHidden ? (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="lucide lucide-chevron-down size-4 text-neutral-400"
                              >
                                <path d="m6 9 6 6 6-6"></path>
                              </svg>
                            ) : (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="lucide lucide-chevron-up size-4 text-neutral-400"
                              >
                                <path d="m18 15-6-6-6 6"></path>
                              </svg>
                            )}
                          </td>
                          <td className="border-t p-2">
                            <div className="flex items-center">
                              <div className="mr-2">
                                <div className={styles["tr-style"]}></div>
                              </div>
                              <div className="font-mono md:hidden">
                                bc1p5…tpe
                              </div>
                              <div className="hidden font-mono md:block">
                                bc1p532nwe08kkr5sqek8jsv60mh5mhrw8pn8nd562jnm848an0hezeqag9tpe
                              </div>
                            </div>
                          </td>
                          <td className="border-t p-2 font-mono">
                            <div>0.004</div>
                          </td>
                          <td className="hidden border-t p-2 text-right font-mono md:table-cell">
                            <div>$228.30</div>
                          </td>
                          <td className="border-t p-2 text-right font-mono">
                            <div>1x</div>
                          </td>
                          <td className="border-t p-2 text-right">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              aria-hidden="true"
                              data-slot="icon"
                              className="ml-2 inline size-5 text-green-700/90"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </td>
                        </tr> */}
                        {/* {arrowHidden && (
                          <tr className="bg-neutral-50 transition ease-in duration-100">
                            <td colspan="7" className="border-tx">
                              <table className="w-full font-mono text-xs text-neutral-500">
                                <tbody>
                                  <tr>
                                    <th className="p-1 md:p-2 text-left font-medium uppercase md:pl-4">
                                      Confirmed at
                                    </th>
                                    <th className="p-1 text-left font-medium uppercase md:p-2">
                                      BTC
                                    </th>
                                    <th className="hidden p-1 text-left font-medium uppercase md:table-cell md:p-2">
                                      USD
                                    </th>
                                    <th className="p-1 text-left font-medium uppercase md:p-2">
                                      Reservations
                                    </th>
                                    <th className="p-1 pr-5 text-right font-medium uppercase md:p-2 md:pr-8">
                                      Tx
                                    </th>
                                  </tr>
                                  <tr className="hover:bg-neutral-300/10">
                                    <td className="py-2 px-1 md:px-2 border-t border-black/5 md:pl-4">
                                      <span className="">
                                        2024/6/5 21:36:02
                                      </span>
                                    </td>
                                    <td className="border-t border-black/5 px-1 py-2 md:px-2">
                                      0.004
                                    </td>
                                    <td className="hidden border-t border-black/5 px-1 py-2 md:table-cell md:px-2">
                                      $227.33
                                    </td>
                                    <td className="border-t border-black/5 px-1 py-2 md:px-2">
                                      <span>1x </span>
                                      <span className="rounded bg-cyan-100/70 px-1 py-0.5 text-cyan-600">
                                        BTC wallet
                                      </span>
                                    </td>
                                    <td className="border-t border-black/5 px-1 py-2 text-right md:px-2">
                                      <span className="">
                                        <a
                                          href="https://mempool.space/tx/696c28d474b21623d0ae46a17ec8a43260a6606f7f9478c677b5bea5aba5ab80"
                                          target="_blank"
                                          className="rounded hover:bg-neutral-300/30 md:px-2 md:py-1"
                                        >
                                          view
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            className="lucide lucide-arrow-up-right relative -top-0.5 ml-0.5 inline-block size-3"
                                          >
                                            <path d="M7 7h10v10"></path>
                                            <path d="M7 17 17 7"></path>
                                          </svg>
                                        </a>
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="py-1.5 pt-2 px-1 md:px-2 border-t-2 border-black/10 uppercase md:pl-4">
                                      Total unconfirmed
                                    </td>
                                    <td
                                      colspan="4"
                                      className="border-t-2 border-black/10 px-1 py-1.5 pt-2 md:px-2"
                                    >
                                      0
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="py-1.5 px-1 md:px-2 uppercase md:pl-4">
                                      Total confirmed
                                    </td>
                                    <td
                                      colspan="4"
                                      className="px-1 py-1.5 md:px-2"
                                    >
                                      0.004
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="py-1.5 px-1 md:px-2 uppercase md:pl-4">
                                      Total Bid
                                    </td>
                                    <td
                                      colspan="4"
                                      className="px-1 py-1.5 md:px-2"
                                    >
                                      0.004
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        )} */}
                        <tr>
                          <td className="border-y bg-red-700">
                            <div className="text-center text-xs font-medium uppercase text-white">
                              cut-off
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center border-t">
        <div className="flex max-w-screen-xl flex-col space-y-4 py-6 text-sm text-neutral-600 md:w-full md:flex-row md:justify-between md:space-y-0">
          <div className="text-center text-neutral-400">
            © 2024 gmscribe.art
          </div>
          <div className="space-x-6">
            <a
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
              href="https://twitter.com/gmDAOscribe"
            >
              X
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
              href="https://discord.com/invite/JwsvSfYhGP"
            >
              Discord
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
              href="https://www.gmstudio.art/"
            >
              gm.studio
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
